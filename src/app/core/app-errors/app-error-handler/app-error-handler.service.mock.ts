import { Observable, of } from 'rxjs';

import { AppErrorHandlerService } from './app-error-handler.service';

// export const MOCK_ExampleReturnType: ExampleReturnType = {};

export const MOCK_AppErrorHandlerService: AppErrorHandlerService = {
  // method(): Observable<ExampleReturnType> {
  //  return of(MOCK_ExampleReturnType);
  // },
};

export const MOCK_AppErrorHandlerServiceProvider: Provider = {
  provide: AppErrorHandlerService,
  useValue: MOCK_AppErrorHandlerService,
};
