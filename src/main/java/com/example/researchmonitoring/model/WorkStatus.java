package com.example.researchmonitoring.model;

public enum WorkStatus {
    DRAFT,       // черновик – видит только студент
    SUBMITTED,   // отправлено научруку на проверку
    ERROR,       // научрук вернул с ошибками
    APPROVED     // работа принята и оценена
}