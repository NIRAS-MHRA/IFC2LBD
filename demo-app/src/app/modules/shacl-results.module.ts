import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SHACLResultsComponent } from './shacl-results.component';

import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [ SHACLResultsComponent ],
    imports: [ CommonModule, MatChipsModule, MatCardModule ],
    exports: [ SHACLResultsComponent ],
    providers: [],
})
export class SHACLResultsModule {}