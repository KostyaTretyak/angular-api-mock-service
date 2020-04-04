export interface Environment {
  production: boolean;
  frontendHost: string;

  // Intended for ApiMockModule
  apiMockRun?: boolean;
  apiMockShowLog?: boolean;
  apiMockClearPrevLog?: boolean;
  apiMockHttpDelay?: number;
  apiMockPassThruUnknownUrl?: boolean;
}
