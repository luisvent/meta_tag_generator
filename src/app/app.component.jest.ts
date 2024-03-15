import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {mockMetadata} from "./mock/metadata";
import {By} from "@angular/platform-browser";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AntdModule} from "./ant.module";
import {AppModule} from "./app.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        AntdModule,
        RouterTestingModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display html code on generate click', () => {

    component.metadata = mockMetadata;
    component.fillForm(mockMetadata);
    fixture.detectChanges();

    const generateBtn = fixture.debugElement.query(By.css('[data-testid="generate-btn"]'));
    generateBtn.triggerEventHandler('click');

    const codeSnippetHtml = fixture.debugElement.query(By.css('[data-testid="code-container"]'));

    expect(codeSnippetHtml).toBeTruthy();
  })

});
