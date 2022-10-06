/// <reference types="@types/google.maps" />
import { User } from './User'
import { Company } from './Company';

import { CustomMap } from "./CustomMap";

const customerMap = new CustomMap('map')
const user = new User()
const company = new Company()

customerMap.addMarker(user)
customerMap.addMarker(company)

