import { Logger } from '@nestjs/common';
import { AbstractDocument } from './abstract.schema';
import { Model } from 'mongoose';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;

  constructor(protected readonly model: Model<TDocument>) {}
}