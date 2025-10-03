FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy built JAR
COPY target/appointment-scheduling-service-1.0.0-SNAPSHOT.jar app.jar

EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]
