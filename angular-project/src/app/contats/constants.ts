import { HttpHeaders } from "@angular/common/http";

export const httpHeaders = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' })
  };
export const baseUrl = "https://localhost:44322/api";