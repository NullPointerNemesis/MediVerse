# ------------------ Blockchain Health Ledger Service ------------------
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy built JAR
COPY target/blockchain-health-ledger-service-1.0.0-SNAPSHOT.jar app.jar

# Expose port (8085 for this service)
EXPOSE 8085

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
