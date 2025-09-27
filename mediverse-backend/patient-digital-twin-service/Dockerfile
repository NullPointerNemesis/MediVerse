# ------------------ Stage 1: Build ------------------
FROM maven:3.9.3-eclipse-temurin-17 AS build

# Set working directory inside the container
WORKDIR /app

# Copy only pom.xml first to leverage Docker cache
COPY pom.xml .

# Copy the source code
COPY src ./src

# Package the application (skip tests to speed up)
RUN mvn clean package -DskipTests

# ------------------ Stage 2: Run ------------------
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the built jar from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose port (can override in docker-compose if needed)
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java","-jar","app.jar"]
