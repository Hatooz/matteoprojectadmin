/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Address {
  /** @format uuid */
  id?: string;
  street?: string | null;
  /** @format int32 */
  number?: number;
  numberAffix?: string | null;
  city?: string | null;
  postalCode?: string | null;
  county?: string | null;
  /** @format uuid */
  propertyId?: string;
  property?: Property;
  appartments?: Appartment[] | null;
}

export interface AddressDTO {
  /** @format uuid */
  id?: string;
  street?: string | null;
  /** @format int32 */
  number?: number;
  numberAffix?: string | null;
  city?: string | null;
  postalCode?: string | null;
  county?: string | null;
}

export interface Advert {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  publishedAt?: string | null;
  /** @format date-time */
  rentalDate?: string | null;
  advertText?: string | null;
  /** @format uuid */
  appartmentId?: string;
  appartment?: Appartment;
}

export interface AdvertDTO {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  publishedAt?: string | null;
  /** @format date-time */
  rentalDate?: string | null;
  advertText?: string | null;
}

export interface Appartment {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  addressId?: string;
  address?: Address;
  objectNumber?: string | null;
  /** @format int32 */
  lmNumber?: number;
  /** @format uuid */
  queueRuleId?: string;
  queueRule?: QueueRule;
  /** @format uuid */
  propertyId?: string;
  property?: Property;
  /** @format uuid */
  advertId?: string | null;
  advert?: Advert;
}

export interface AppartmentDTO {
  /** @format uuid */
  id: string;
  address: AddressDTO;
  objectNumber: string | null;
  /** @format int32 */
  lmNumber: number;
  queueRule: QueueRuleDTO;
  /** @format uuid */
  propertyId: string;
  advert?: AdvertDTO;
}

export interface AppartmentListDTO {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  addressId?: string;
  /** @format uuid */
  queueRuleId?: string;
  /** @format uuid */
  propertyId?: string;
  /** @format uuid */
  advertId?: string | null;
}

export interface CreatePropertyDTO {
  objectNumber?: string | null;
  /** @format int32 */
  lmNumber?: number;
  /** @format uuid */
  queueRuleId?: string;
}

export interface Property {
  /** @format uuid */
  id?: string;
  objectNumber?: string | null;
  /** @format int32 */
  lmNumber?: number;
  /** @format uuid */
  queueRuleId?: string;
  queueRule?: QueueRule;
  appartments?: Appartment[] | null;
  addresses?: Address[] | null;
}

export interface PropertyDTO {
  /** @format uuid */
  id: string;
  objectNumber: string | null;
  /** @format int32 */
  lmNumber: number;
  queueRule: QueueRuleDTO;
  addresses: AddressDTO[] | null;
  appartments?: AppartmentListDTO[] | null;
}

export interface QueueRule {
  /** @format uuid */
  id?: string;
  name?: string | null;
  appartments?: Appartment[] | null;
  properties?: Property[] | null;
}

export interface QueueRuleDTO {
  /** @format uuid */
  id?: string;
  name?: string | null;
}
