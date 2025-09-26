# Stage 1: Build the jar
FROM maven:3.9.3-eclipse-temurin-17 AS build
WORKDIR /app

# Copy only pom first for caching
COPY pom.xml .
COPY src ./src

# Build the jar, skip tests to speed up
RUN mvn clean package -DskipTests

# Stage 2: Run the jar
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy jar from build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 9090
ENTRYPOINT ["java","-jar","app.jar"]
