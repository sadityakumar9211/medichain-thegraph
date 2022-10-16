import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddedDoctor,
  AddedHospital,
  AddedPatient,
  AddedPublicKey
} from "../generated/PatientMedicalRecordSystem/PatientMedicalRecordSystem"

export function createAddedDoctorEvent(
  doctorAddress: Address,
  name: string,
  doctorRegistrationId: string,
  dateOfRegistration: BigInt,
  specialization: string,
  hospitalAddress: Address
): AddedDoctor {
  let addedDoctorEvent = changetype<AddedDoctor>(newMockEvent())

  addedDoctorEvent.parameters = new Array()

  addedDoctorEvent.parameters.push(
    new ethereum.EventParam(
      "doctorAddress",
      ethereum.Value.fromAddress(doctorAddress)
    )
  )
  addedDoctorEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addedDoctorEvent.parameters.push(
    new ethereum.EventParam(
      "doctorRegistrationId",
      ethereum.Value.fromString(doctorRegistrationId)
    )
  )
  addedDoctorEvent.parameters.push(
    new ethereum.EventParam(
      "dateOfRegistration",
      ethereum.Value.fromUnsignedBigInt(dateOfRegistration)
    )
  )
  addedDoctorEvent.parameters.push(
    new ethereum.EventParam(
      "specialization",
      ethereum.Value.fromString(specialization)
    )
  )
  addedDoctorEvent.parameters.push(
    new ethereum.EventParam(
      "hospitalAddress",
      ethereum.Value.fromAddress(hospitalAddress)
    )
  )

  return addedDoctorEvent
}

export function createAddedHospitalEvent(
  hospitalAddress: Address,
  name: string,
  hospitalRegistrationId: string,
  dateOfRegistration: BigInt,
  email: string,
  phoneNumber: string
): AddedHospital {
  let addedHospitalEvent = changetype<AddedHospital>(newMockEvent())

  addedHospitalEvent.parameters = new Array()

  addedHospitalEvent.parameters.push(
    new ethereum.EventParam(
      "hospitalAddress",
      ethereum.Value.fromAddress(hospitalAddress)
    )
  )
  addedHospitalEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addedHospitalEvent.parameters.push(
    new ethereum.EventParam(
      "hospitalRegistrationId",
      ethereum.Value.fromString(hospitalRegistrationId)
    )
  )
  addedHospitalEvent.parameters.push(
    new ethereum.EventParam(
      "dateOfRegistration",
      ethereum.Value.fromUnsignedBigInt(dateOfRegistration)
    )
  )
  addedHospitalEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  addedHospitalEvent.parameters.push(
    new ethereum.EventParam(
      "phoneNumber",
      ethereum.Value.fromString(phoneNumber)
    )
  )

  return addedHospitalEvent
}

export function createAddedPatientEvent(
  patientAddress: Address,
  name: string,
  chronicHash: Array<string>,
  dob: BigInt,
  bloodGroup: string,
  dateOfRegistration: BigInt,
  publicKey: string,
  vaccinationHash: Array<string>,
  phoneNumber: string,
  accidentHash: Array<string>,
  acuteHash: Array<string>
): AddedPatient {
  let addedPatientEvent = changetype<AddedPatient>(newMockEvent())

  addedPatientEvent.parameters = new Array()

  addedPatientEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam(
      "chronicHash",
      ethereum.Value.fromStringArray(chronicHash)
    )
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam("dob", ethereum.Value.fromUnsignedBigInt(dob))
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam("bloodGroup", ethereum.Value.fromString(bloodGroup))
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam(
      "dateOfRegistration",
      ethereum.Value.fromUnsignedBigInt(dateOfRegistration)
    )
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam("publicKey", ethereum.Value.fromString(publicKey))
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam(
      "vaccinationHash",
      ethereum.Value.fromStringArray(vaccinationHash)
    )
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam(
      "phoneNumber",
      ethereum.Value.fromString(phoneNumber)
    )
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam(
      "accidentHash",
      ethereum.Value.fromStringArray(accidentHash)
    )
  )
  addedPatientEvent.parameters.push(
    new ethereum.EventParam(
      "acuteHash",
      ethereum.Value.fromStringArray(acuteHash)
    )
  )

  return addedPatientEvent
}

export function createAddedPublicKeyEvent(
  patientAddress: Address,
  publicKey: string
): AddedPublicKey {
  let addedPublicKeyEvent = changetype<AddedPublicKey>(newMockEvent())

  addedPublicKeyEvent.parameters = new Array()

  addedPublicKeyEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  addedPublicKeyEvent.parameters.push(
    new ethereum.EventParam("publicKey", ethereum.Value.fromString(publicKey))
  )

  return addedPublicKeyEvent
}
