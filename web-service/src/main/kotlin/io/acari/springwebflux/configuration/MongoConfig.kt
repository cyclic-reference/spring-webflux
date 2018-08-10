package io.acari.springwebflux.configuration

import com.mongodb.ConnectionString
import com.mongodb.async.client.MongoClientSettings
import com.mongodb.connection.ClusterSettings
import com.mongodb.connection.netty.NettyStreamFactoryFactory
import com.mongodb.reactivestreams.client.MongoClient
import com.mongodb.reactivestreams.client.MongoClients
import com.mongodb.reactivestreams.client.gridfs.GridFSBucket
import com.mongodb.reactivestreams.client.gridfs.GridFSBuckets
import io.netty.channel.nio.NioEventLoopGroup
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.data.mongodb.config.AbstractReactiveMongoConfiguration
import javax.annotation.PreDestroy

/**
 * Forged in the flames of battle by alex.
 */

@Configuration
class MongoConfig(private val environment: Environment) : AbstractReactiveMongoConfiguration() {
    private val log = loggerFor(javaClass)

    private val eventLoopGroup = NioEventLoopGroup()


    override fun reactiveMongoClient(): MongoClient {
        val property = environment.getProperty("acari.mongo.connectionString", "localhost:27017")
        log.warn("this is the db prop: $property")
        return MongoClients.create(MongoClientSettings.builder()
                .streamFactoryFactory(NettyStreamFactoryFactory.builder()
                        .eventLoopGroup(eventLoopGroup)
                        .build())
                .clusterSettings(ClusterSettings.builder()
                        .applyConnectionString(ConnectionString(
                                property))
                        .build())
                .build())
    }

    override fun getDatabaseName(): String =
            environment.getProperty("acari.mongo.landingDatabase", "images")

    @Bean
    fun gridFsTemplate(reactiveMongoClient: MongoClient): GridFSBucket =
            GridFSBuckets.create(reactiveMongoClient.getDatabase(databaseName))

    @PreDestroy
    fun shutdown() {
        eventLoopGroup.shutdownGracefully()
    }
}

fun <T> loggerFor(clazz: Class<T>): Logger = LoggerFactory.getLogger(clazz)

