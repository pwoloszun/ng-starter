import { render, screen } from '@testing-library/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';

async function renderDashboardComponent() {
  return render(DashboardComponent);
};

describe('DashboardComponent', () => {
  it('should render dashboard', async () => {
    await renderDashboardComponent();

    expect(screen.getByText(/dashboard works!/i));
  });
});
