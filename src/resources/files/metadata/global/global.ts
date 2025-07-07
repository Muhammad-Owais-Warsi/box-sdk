// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BoxSkillsCardsAPI from './box-skills-cards';
import {
  BoxSkillsCardCreateParams,
  BoxSkillsCardUpdateParams,
  BoxSkillsCards,
  KeywordSkillCard,
  SkillCardsMetadata,
  StatusSkillCard,
  TimelineSkillCard,
  TranscriptSkillCard,
} from './box-skills-cards';

export class Global extends APIResource {
  boxSkillsCards: BoxSkillsCardsAPI.BoxSkillsCards = new BoxSkillsCardsAPI.BoxSkillsCards(this._client);
}

Global.BoxSkillsCards = BoxSkillsCards;

export declare namespace Global {
  export {
    BoxSkillsCards as BoxSkillsCards,
    type KeywordSkillCard as KeywordSkillCard,
    type SkillCardsMetadata as SkillCardsMetadata,
    type StatusSkillCard as StatusSkillCard,
    type TimelineSkillCard as TimelineSkillCard,
    type TranscriptSkillCard as TranscriptSkillCard,
    type BoxSkillsCardCreateParams as BoxSkillsCardCreateParams,
    type BoxSkillsCardUpdateParams as BoxSkillsCardUpdateParams,
  };
}
