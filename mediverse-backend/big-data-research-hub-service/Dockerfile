FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy pre-built JAR
COPY target/big-data-research-hub-service-1.0.0-SNAPSHOT.jar app.jar

EXPOSE 8083
ENTRYPOINT ["java", "-jar", "app.jar"]
