FROM eclipse-temurin:21-jdk-alpine as cleaner

COPY . .

RUN ./gradlew clean

FROM cleaner as builder

RUN ./gradlew bootJar

FROM eclipse-temurin:21-jre-alpine as runner

COPY --from=builder ./build/libs/*.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]