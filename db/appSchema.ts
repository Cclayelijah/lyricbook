import { appSchema } from '@nozbe/watermelondb'
import { 
  bookmarkedSongsSchema,
  favoritedSongsSchema,
  lineSchema,
  songSchema,
  songRequestSchema,
  studySessionSchema,
  tutorRequestSchema,
  userSchema,
  userStatsSchema,
  vocabSchema
} from './tableSchemas';

export const schema = appSchema({
    version: 1,
    tables: [
        bookmarkedSongsSchema,
        favoritedSongsSchema,
        lineSchema,
        songSchema,
        songRequestSchema,
        studySessionSchema,
        tutorRequestSchema,
        userSchema,
        userStatsSchema,
        vocabSchema,
    ]
})