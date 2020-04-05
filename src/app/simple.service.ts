import { ApiMockService, ApiMockDataCallback, ApiMockRootRoute } from '@ng-stack/api-mock';
import { SimpleModel } from './simple.model';

export class SimpleService implements ApiMockService {
  getRoutes(): ApiMockRootRoute[] {
    return [
      {
        path: 'simple/:id',
        dataCallback: this.getDataCallback(),
      },
    ];
  }

  /**
   * The callback called when URL is like `/simple` or `/simple/3`.
   */
  private getDataCallback(): ApiMockDataCallback<SimpleModel[]> {
    return ({ httpMethod, items }) => {
      if (httpMethod == 'GET') {
        return [
          { id: 1, name: 'Windstorm' },
          { id: 2, name: 'Bombasto' },
          { id: 3, name: 'Magneta' },
          { id: 4, name: 'Tornado' },
        ];
      } else {
        return items;
      }
    };
  }
}
