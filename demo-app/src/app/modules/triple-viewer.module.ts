import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// NG2 CODEMIRROR (https://www.npmjs.com/package/ng2-codemirror)
import { CodemirrorModule } from 'ng2-codemirror';

// Material design
import {MatButtonToggleModule} from '@angular/material/button-toggle';

// Module components
import { TripleViewerComponent } from './triple-viewer.component';

@NgModule({
    declarations: [
        TripleViewerComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        CodemirrorModule,
        MatButtonToggleModule
    ],
    exports: [
        TripleViewerComponent
    ],
    providers: [],
})
export class TripleViewerModule {}