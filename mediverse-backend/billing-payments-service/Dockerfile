# ------------------ Billing Payments Service ------------------
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy built JAR
COPY target/billing-payments-service-1.0.0-SNAPSHOT.jar app.jar

# Expose port (8084 for this service)
EXPOSE 8084

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
