import { render } from '@testing-library/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

const renderAppComponent = () => {
  return render(AppComponent, {
    imports: [
      RouterTestingModule,
    ]
  });
};

describe('AppComponent', () => {
  it('should render counter', async () => {
    const { getByText } = await renderAppComponent();

    expect(getByText(/ng-starter/)).toBeDefined();
  });
});
