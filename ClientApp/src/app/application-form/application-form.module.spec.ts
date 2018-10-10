import { ApplicationFormModule } from './application-form.module';

describe('ApplicationFormModule', () => {
  let applicationFormModule: ApplicationFormModule;

  beforeEach(() => {
    applicationFormModule = new ApplicationFormModule();
  });

  it('should create an instance', () => {
    expect(applicationFormModule).toBeTruthy();
  });
});
