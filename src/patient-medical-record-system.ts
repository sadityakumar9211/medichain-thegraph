import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts";
import {
  AddedDoctor as AddedDoctorEvent,
  AddedHospital as AddedHospitalEvent,
  AddedPatient as AddedPatientEvent,
  AddedPublicKey as AddedPublicKeyEvent
} from "../generated/PatientMedicalRecordSystem/PatientMedicalRecordSystem";

import { AddedPatient, AddedDoctor, AddedHospital, AddedPublicKey } from "../generated/schema";

export function handleAddedDoctor(event: AddedDoctorEvent): void {
  //save that event in our graph

  //get or create an addeddoctor object
  //each item needs a unique Id and we have to create that Id

  //we have an AddedDoctorEvent : Just the raw event
  //we need the AddedDoctorObject: what we save

  let addedDoctor = AddedDoctor.load(
    getIdFromEventParams(event.params.doctorAddress)
  );

  if (!addedDoctor) {
    addedDoctor = new AddedDoctor(
      getIdFromEventParams(event.params.doctorAddress)
    );
  }
  addedDoctor.doctorAddress = event.params.doctorAddress;
  addedDoctor.name = event.params.name;
  addedDoctor.doctorRegistrationId = event.params.doctorRegistrationId;
  addedDoctor.dateOfRegistration = event.params.dateOfRegistration;
  addedDoctor.specialization = event.params.specialization;
  addedDoctor.hospitalAddress = event.params.hospitalAddress;

  addedDoctor.save();
}

export function handleAddedHospital(event: AddedHospitalEvent): void {
  //save that event in our graph
  let addedHospital = AddedHospital.load(
    getIdFromEventParams(event.params.hospitalAddress)
  );

  if (!addedHospital) {
    addedHospital = new AddedHospital(
      getIdFromEventParams(event.params.hospitalAddress)
    );
  }
  addedHospital.hospitalAddress = event.params.hospitalAddress;
  addedHospital.dateOfRegistration = event.params.dateOfRegistration;
  addedHospital.hospitalRegistrationId = event.params.hospitalRegistrationId;
  addedHospital.name = event.params.name;
  addedHospital.email = event.params.email;
  addedHospital.phoneNumber = event.params.phoneNumber;

  addedHospital.save();
}

export function handleAddedPatient(event: AddedPatientEvent): void {
  //save that event in our graph
  let addedPatient = AddedPatient.load(
    getIdFromEventParams(event.params.patientAddress)
  );
  if (!addedPatient) {
    addedPatient = new AddedPatient(
      getIdFromEventParams(event.params.patientAddress)
    );
  }
  addedPatient.patientAddress = event.params.patientAddress;
  addedPatient.name = event.params.name;
  //addedPatient.chronicHash = event.params.chronicHash
  addedPatient.dob = event.params.dob;
  addedPatient.bloodGroup = event.params.bloodGroup;
  addedPatient.dateOfRegistration = event.params.dateOfRegistration;
  addedPatient.vaccinationHash = event.params.vaccinationHash;
  addedPatient.phoneNumber = event.params.phoneNumber;
  addedPatient.accidentHash = event.params.accidentHash;
  addedPatient.acuteHash = event.params.acuteHash;
  addedPatient.chronicHash = event.params.chronicHash;
  addedPatient.publicKey = event.params.publicKey;

  addedPatient.save();
}

export function handleAddedPublicKey(event: AddedPublicKeyEvent): void {
  //save that event in our graph
  let addedPublicKey = AddedPublicKey.load(
    getIdFromEventParams(event.params.patientAddress)
  )
  if (!addedPublicKey) {
    addedPublicKey = new AddedPublicKey(
      getIdFromEventParams(event.params.patientAddress)
    );
  }

  addedPublicKey.patientAddress = event.params.patientAddress
  addedPublicKey.publicKey = event.params.publicKey

  addedPublicKey.save()


}

function getIdFromEventParams(accountAddress: Address): string {
  return accountAddress.toHexString();
}
