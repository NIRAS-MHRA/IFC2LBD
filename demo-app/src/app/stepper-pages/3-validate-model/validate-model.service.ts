import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidateModelService {

    constructor(
        private _http: HttpClient
      ) { }

    getSampleShapes(){
        return `@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix ifc: <http://ifcowl.openbimstandards.org/IFC2X3_Final#> .
@prefix ccs:    <https://ccs.molio.dk/ontology#> .

ccs:QQCShape
        a sh:NodeShape ;
        sh:targetClass ccs:QQC ;
        sh:property [
            sh:path ifc:overallWidth ;
            sh:minCount 1 ;
            sh:severity sh:Violation ;
            sh:message "Doors (QQC) must have an overall width"@en, "Døre (QQC) skal have en overordnet bredde"@da 
        ] , [
            sh:path ifc:overallWidth ;
            sh:minInclusive 1 ;
            sh:severity sh:Warning ;
            sh:message "Doors (QQC) should have an overall width of at least 1 meter"@en, "Døre (QQC) bør have en overordnet bredde på mindst en meter"@da 
        ] , [
            sh:path ccs:aapl ;
            sh:minCount 1 ;
            sh:severity sh:Violation ;
            sh:message "Doors (QQC) must have a width specified with the ccs:aapl property"@en, "Døre (QQC) skal have en bredde angivet med ccs:aapl"@da 
        ] .`;
    }

}