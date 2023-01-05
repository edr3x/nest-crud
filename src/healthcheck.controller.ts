import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthCheckController {
    @Get()
    healthCheck(): string {
        return `Hello There`;
    }
}
