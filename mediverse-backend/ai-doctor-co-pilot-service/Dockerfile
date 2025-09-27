# ------------------ Stage 1: Build (optional, local build recommended) ------------------
# If you want Docker to build the JAR, uncomment below. Otherwise, build JAR locally.
# FROM maven:3.9.3-eclipse-temurin-17 AS build
# WORKDIR /app
# COPY . .
# RUN mvn clean package -DskipTests

# ------------------ Stage 2: Runtime ------------------
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy the pre-built JAR from target folder
COPY target/ai-doctor-co-pilot-service-1.0.0-SNAPSHOT.jar app.jar

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
