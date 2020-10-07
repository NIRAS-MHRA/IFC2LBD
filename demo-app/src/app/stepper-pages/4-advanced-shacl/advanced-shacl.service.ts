import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as urljoin from 'url-join';

@Injectable()
export class AdvancedSHACLService {

    constructor(
        private _http: HttpClient
      ) { }

    getSampleData(){
        return `@prefix ex: <http://example.com/ns#> .
ex:InvalidRectangle
    a ex:Rectangle .
ex:NonSquareRectangle
    a ex:Rectangle ;
    ex:height 2 ;
    ex:width 3 .
    
ex:SquareRectangle
    a ex:Rectangle ;
    ex:height 4 ;
    ex:width 4 .`;
    }

    getSampleShapes(){
        return `@prefix ex: <http://example.com/ns#> .
@prefix sh:     <http://www.w3.org/ns/shacl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
ex:
    sh:declare [
        sh:prefix "ex" ;
        sh:namespace <http://example.com/ns#> ;
    ] .
ex:Rectangle
    a rdfs:Class, sh:NodeShape ;
    rdfs:label "Rectangle" ;
    sh:property [
        sh:path ex:height ;
        sh:datatype xsd:integer ;
        sh:maxCount 1 ;
        sh:minCount 1 ;
        sh:name "height" ;
    ] ;
    sh:property [
        sh:path ex:width ;
        sh:datatype xsd:integer ;
        sh:maxCount 1 ;
        sh:minCount 1 ;
        sh:name "width" ;
    ] ;
    sh:rule [
        a sh:TripleRule ;
        sh:subject sh:this ;
        sh:predicate rdf:type ;
        sh:object ex:Square ;
        sh:condition ex:Rectangle ;
        sh:condition [
            sh:property [
                sh:path ex:width ;
                sh:equals ex:height ;
            ] ;
        ] ;
    ] .`;
    }

}