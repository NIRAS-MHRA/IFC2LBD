import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Globals {

    private modelTriples: BehaviorSubject<string>;
    private ontologyTriples: BehaviorSubject<string>;

    constructor() {
        this.modelTriples = new BehaviorSubject<string>(null);
        this.ontologyTriples = new BehaviorSubject<string>(null);
    }

    public getModelTriples(): Observable<string> {
        return this.modelTriples.asObservable();
    }

    public setModelTriples(newValue: string): void {
        console.log(newValue)
        this.modelTriples.next(newValue);
    }

    public getOntologyTriples(): Observable<string> {
        return this.ontologyTriples.asObservable();
    }

    public setOntologyTriples(newValue: string): void {
        this.ontologyTriples.next(newValue);
    }

    public useSampleModelTriples(): void {
        this.modelTriples.next(this.sampleModelTriples);
    }

    public useSampleOntologyTriples(): void {
        this.ontologyTriples.next(this.sampleOntologyTriples);
    }

    private sampleModelTriples = `@prefix inst: <https://namespace.example.com/> .
@prefix ifc: <http://ifcowl.openbimstandards.org/IFC2X3_Final#> .

inst:1hOSvn6df7F8_7GcBWlRGQ ifc:globalId """1hOSvn6df7F8_7GcBWlRGQ""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:name """M_Single-Flush:1250mm x 2010mm:1250mm x 2010mm:146596""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:objectPlacement """#6596=IfcLocalPlacement(#6513,#6595)""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:objectType """1250mm x 2010mm""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:overallHeight """2.009999999999999""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:overallWidth """1.25""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:representation """#6591=IfcProductDefinitionShape($,$,(#6587,#6590))""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:tag """146596""" .
inst:1hOSvn6df7F8_7GcBWlRGQ ifc:id """6597""" .
inst:1hOSvn6df7F8_7GcBWlRGQ a ifc:IfcDoor .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:globalId """1hOSvn6df7F8_7GcBWlRH8""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:name """M_Single-Flush:1250mm x 2010mm:1250mm x 2010mm:146678""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:objectPlacement """#6701=IfcLocalPlacement(#6687,#6700)""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:objectType """1250mm x 2010mm""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:overallHeight """2.009999999999999""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:overallWidth """1.25""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:representation """#6696=IfcProductDefinitionShape($,$,(#6692,#6695))""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:tag """146678""" .
inst:1hOSvn6df7F8_7GcBWlRH8 ifc:id """6702""" .
inst:1hOSvn6df7F8_7GcBWlRH8 a ifc:IfcDoor .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:globalId """1hOSvn6df7F8_7GcBWlS8Z""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:name """M_Single-Flush:0762 x 2032mm:0762 x 2032mm:150173""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:objectPlacement """#8010=IfcLocalPlacement(#7933,#8009)""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:objectType """0762 x 2032mm""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:overallHeight """2.032""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:overallWidth """0.7619999999999989""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:representation """#8005=IfcProductDefinitionShape($,$,(#8001,#8004))""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:tag """150173""" .
inst:1hOSvn6df7F8_7GcBWlS8Z ifc:id """8011""" .
inst:1hOSvn6df7F8_7GcBWlS8Z a ifc:IfcDoor .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:globalId """1hOSvn6df7F8_7GcBWlS9F""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:name """M_Single-Flush:0762 x 2032mm:0762 x 2032mm:150257""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:objectPlacement """#8113=IfcLocalPlacement(#8099,#8112)""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:objectType """0762 x 2032mm""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:overallHeight """2.032""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:overallWidth """0.762""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:representation """#8108=IfcProductDefinitionShape($,$,(#8104,#8107))""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:tag """150257""" .
inst:1hOSvn6df7F8_7GcBWlS9F ifc:id """8114""" .
inst:1hOSvn6df7F8_7GcBWlS9F a ifc:IfcDoor .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:globalId """1hOSvn6df7F8_7GcBWlSFK""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:name """M_Single-Flush:0864 x 2032mm:0864 x 2032mm:150378""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:objectPlacement """#8227=IfcLocalPlacement(#8150,#8226)""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:objectType """0864 x 2032mm""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:overallHeight """2.032""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:overallWidth """0.8639999999999999""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:representation """#8222=IfcProductDefinitionShape($,$,(#8218,#8221))""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:tag """150378""" .
inst:1hOSvn6df7F8_7GcBWlSFK ifc:id """8228""" .
inst:1hOSvn6df7F8_7GcBWlSFK a ifc:IfcDoor .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:globalId """1hOSvn6df7F8_7GcBWlSDm""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:name """M_Single-Flush:0864 x 2032mm:0864 x 2032mm:150478""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:objectPlacement """#8330=IfcLocalPlacement(#8316,#8329)""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:objectType """0864 x 2032mm""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:overallHeight """2.032""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:overallWidth """0.8639999999999995""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:representation """#8325=IfcProductDefinitionShape($,$,(#8321,#8324))""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:tag """150478""" .
inst:1hOSvn6df7F8_7GcBWlSDm ifc:id """8331""" .
inst:1hOSvn6df7F8_7GcBWlSDm a ifc:IfcDoor .
inst:2OBrcmyk58NupXoVOHUuXp ifc:globalId """2OBrcmyk58NupXoVOHUuXp""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:name """M_Single-Flush:0864 x 2032mm:0864 x 2032mm:159734""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:objectPlacement """#15900=IfcLocalPlacement(#15823,#15899)""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:objectType """0864 x 2032mm""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:overallHeight """2.032""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:overallWidth """0.8639999999999995""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:representation """#15895=IfcProductDefinitionShape($,$,(#15891,#15894))""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:tag """159734""" .
inst:2OBrcmyk58NupXoVOHUuXp ifc:id """15901""" .
inst:2OBrcmyk58NupXoVOHUuXp a ifc:IfcDoor .
inst:2OBrcmyk58NupXoVOHUvVV ifc:globalId """2OBrcmyk58NupXoVOHUvVV""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:name """M_Single-Flush:0864 x 2032mm:0864 x 2032mm:159834""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:objectPlacement """#15951=IfcLocalPlacement(#15937,#15950)""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:objectType """0864 x 2032mm""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:overallHeight """2.032""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:overallWidth """0.8639999999999995""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:representation """#15946=IfcProductDefinitionShape($,$,(#15942,#15945))""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:tag """159834""" .
inst:2OBrcmyk58NupXoVOHUvVV ifc:id """15952""" .
inst:2OBrcmyk58NupXoVOHUvVV a ifc:IfcDoor .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:globalId """2OBrcmyk58NupXoVOHUvR4""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:name """M_Single-Flush:0864 x 2032mm:0864 x 2032mm:160065""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:objectPlacement """#16002=IfcLocalPlacement(#15988,#16001)""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:objectType """0864 x 2032mm""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:overallHeight """2.032""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:overallWidth """0.8639999999999985""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:representation """#15997=IfcProductDefinitionShape($,$,(#15993,#15996))""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:tag """160065""" .
inst:2OBrcmyk58NupXoVOHUvR4 ifc:id """16003""" .
inst:2OBrcmyk58NupXoVOHUvR4 a ifc:IfcDoor .
inst:2OBrcmyk58NupXoVOHUvPL ifc:globalId """2OBrcmyk58NupXoVOHUvPL""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:name """M_Single-Flush:0864 x 2032mm:0864 x 2032mm:160208""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:objectPlacement """#16053=IfcLocalPlacement(#16039,#16052)""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:objectType """0864 x 2032mm""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:overallHeight """2.032""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:overallWidth """0.8639999999999995""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:representation """#16048=IfcProductDefinitionShape($,$,(#16044,#16047))""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:tag """160208""" .
inst:2OBrcmyk58NupXoVOHUvPL ifc:id """16054""" .
inst:2OBrcmyk58NupXoVOHUvPL a ifc:IfcDoor .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:globalId """1s1jVhK8z0pgKYcr9jt781""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:name """M_Single-Glass 1:0813 x 2420mm:0813 x 2420mm:171853""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:objectPlacement """#21755=IfcLocalPlacement(#21639,#21754)""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:objectType """0813 x 2420mm""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:overallHeight """2.42""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:overallWidth """0.8129999999999998""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:representation """#21750=IfcProductDefinitionShape($,$,(#21746,#21749))""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:tag """171853""" .
inst:1s1jVhK8z0pgKYcr9jt781 ifc:id """21756""" .
inst:1s1jVhK8z0pgKYcr9jt781 a ifc:IfcDoor .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:globalId """1s1jVhK8z0pgKYcr9jt7AB""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:name """M_Single-Glass 1:0813 x 2420mm:0813 x 2420mm:171975""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:objectPlacement """#21863=IfcLocalPlacement(#21849,#21862)""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:objectType """0813 x 2420mm""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:overallHeight """2.42""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:overallWidth """0.8129999999999993""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:representation """#21858=IfcProductDefinitionShape($,$,(#21854,#21857))""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:tag """171975""" .
inst:1s1jVhK8z0pgKYcr9jt7AB ifc:id """21864""" .
inst:1s1jVhK8z0pgKYcr9jt7AB a ifc:IfcDoor .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:globalId """1aj$VJZFn2TxepZUBcKp$i""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:name """M_Single-Flush:0762 x 2032mm:0762 x 2032mm:203720""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:objectPlacement """#35195=IfcLocalPlacement(#35118,#35194)""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:objectType """0762 x 2032mm""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:overallHeight """2.032""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:overallWidth """0.762""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:representation """#35190=IfcProductDefinitionShape($,$,(#35186,#35189))""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:tag """203720""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i ifc:id """35196""" .
inst:1aj%24VJZFn2TxepZUBcKp%24i a ifc:IfcDoor .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:globalId """1aj$VJZFn2TxepZUBcKpac""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:name """M_Single-Flush:0762 x 2032mm:0762 x 2032mm:204034""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:objectPlacement """#35290=IfcLocalPlacement(#35276,#35289)""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:objectType """0762 x 2032mm""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:overallHeight """2.032""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:overallWidth """0.762""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:ownerHistory """#33=IfcOwnerHistory(#32,#2,$,.NOCHANGE.,$,$,$,0)""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:representation """#35285=IfcProductDefinitionShape($,$,(#35281,#35284))""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:tag """204034""" .
inst:1aj%24VJZFn2TxepZUBcKpac ifc:id """35291""" .
inst:1aj%24VJZFn2TxepZUBcKpac a ifc:IfcDoor .`;

    private sampleOntologyTriples = `@prefix ccs:    <https://ccs.molio.dk/ontology#> .
@prefix ifc:    <http://ifcowl.openbimstandards.org/IFC2X3_Final#> .
@prefix rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl:    <http://www.w3.org/2002/07/owl#> .

ccs:QQC a owl:Class ;
    rdfs:subClassOf     ccs:QQx ;
    ccs:code            "QQC" ;
    ccs:id              "4b208c9e-8211-4f0c-a0e0-abe3b2df7cb0" ;
    rdfs:label          "Door"@en , "Dør"@da ;
    rdfs:comment        "access granting component mainly for persons"@en .

ifc:IfcDoor rdfs:subClassOf ccs:QQC .`;

}