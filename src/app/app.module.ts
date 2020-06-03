import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { HomeComponent } from './components/home/home.component';
import { SelectFilesModalComponent } from './components/select-files-modal/select-files-modal.component';
import { SocialComponent } from './components/social/social.component';
import { UserSettingsModalComponent } from './components/user-settings-modal/user-settings-modal.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { FaqComponent } from './components/faq/faq.component';
import { DonateComponent } from './components/donate/donate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CopyClipboardDirective } from './directives/copy-clipboard.directive';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { LiveComponent } from './components/live/live.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    HomeComponent,
    SocialComponent,
    SelectFilesModalComponent,
    UserSettingsModalComponent,
    ColorPickerComponent,
    BytesPipe,
    DurationPipe,
    FaqComponent,
    DonateComponent,
    CopyClipboardDirective,
    ToastsContainerComponent,
    LiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SelectFilesModalComponent,
    UserSettingsModalComponent,
  ]
})
export class AppModule { }
