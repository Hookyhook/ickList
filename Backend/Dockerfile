# Use a base image with Java 17 and Gradle pre-installed
FROM gradle:7.5.1-jdk17 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the Gradle build files and settings to the container
COPY build.gradle .
COPY settings.gradle .
COPY gradlew .
COPY gradle ./gradle


COPY src ./src


EXPOSE 8080

# Specify the command to run the Spring Boot application when the container starts
CMD ["./gradlew", "bootRun"]
