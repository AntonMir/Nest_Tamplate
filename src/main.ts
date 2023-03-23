import { NestFactory } from "@nestjs/core"
import { DocumentBuilder } from "@nestjs/swagger"
import { SwaggerModule } from "@nestjs/swagger/dist"
import { AppModule } from "./app.module"

async function start() {
  const PORT = process.env.PORT || 6666
  const app = await NestFactory.create(AppModule)

  // SWAGGER
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Урок по продвинутому бэкенду')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('NEST TEMPLATE')
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
  })
}

start()