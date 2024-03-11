
# Kafka Docker Setup

This `README.md` file provides a step-by-step guide on setting up Kafka with Docker using command-line tools, 
including instructions for creating a topic and running producer and consumer apps.
Adjustments can be made based on your specific Kafka setup and requirements.

## Prerequisites

- Docker installed on your system
- Basic knowledge of Docker and Kafka concepts

## Setup

1. **Start Docker containers**:
   ```bash
   docker-compose up -d  OR
   docker compose -f docker-compose.yaml -d

2. **Move into Kafka container**:
   ```bash
   docker exec -it <kafka_conatiner_id> /bin/sh

3. **Go inside kafka installation folder**:
   ```bash
   cd /opt/kafka_<version>/bin

4. **Create Kafka topic**:
   ```bash
   kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic quickstart

5. **Start Producer app (CLI)**:
   ```bash
   kafka-console-producer.sh --topic quickstart --bootstrap-server localhost:9092

6. **Start Consumer app (CLI), open a new terminal, locate to the same folder as previous terminal and run**:
   ```bash
   kafka-console-consumer.sh --topic quickstart --from-beginning --bootstrap-server localhost:9092
   
- Also, you can download **Offset Explorer** this is _kafka tool_ for manage messages between Procedure and Consumer,
from the next link: https://www.kafkatool.com/download.html

## References

- [Apache Kafka Documentation](https://kafka.apache.org/documentation/)
- [Docker Documentation](https://docs.docker.com/)
- [Confluent Documentation](https://docs.confluent.io/platform/current/)