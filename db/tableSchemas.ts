import { tableSchema } from '@nozbe/watermelondb'

export const bookmarkedSongsSchema = tableSchema({
  name: 'bookmarked_songs',
  columns: [
    { name: 'song_id', type: 'string' },
    { name: 'user_id', type: 'string' },
    { name: 'created_at', type: 'number' }, // Use timestamp as a number (milliseconds)
  ],
});

export const favoritedSongsSchema = tableSchema({
  name: 'favorited_songs',
  columns: [
    { name: 'song_id', type: 'string' },
    { name: 'user_id', type: 'string' },
    { name: 'created_at', type: 'number' }, 
  ],
});

export const lineSchema = tableSchema({
  name: 'line',
  columns: [
    { name: 'line_id', type: 'string' },
    { name: 'text', type: 'string' },
    { name: 'song_id', type: 'string' },
  ],
});

export const songSchema = tableSchema({
  name: 'song',
  columns: [
    { name: 'song_id', type: 'string' },
    { name: 'created_at', type: 'number' }, 
    { name: 'title', type: 'string' },
    { name: 'title_pinyin', type: 'string' },
    { name: 'artist', type: 'string' },
    { name: 'artist_pinyin', type: 'string' },
    { name: 'artist_english', type: 'string', isOptional: true },
    { name: 'image', type: 'string' },
    { name: 'youtube', type: 'string', isOptional: true },
    { name: 'spotify', type: 'string', isOptional: true },
    { name: 'song_request_id', type: 'string', isOptional: true },
  ],
});

export const songRequestSchema = tableSchema({
  name: 'song_request',
  columns: [
    { name: 'song_request_id', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'artist', type: 'string', isOptional: true },
    { name: 'lyrics_link', type: 'string', isOptional: true },
    { name: 'youtube', type: 'string', isOptional: true },
    { name: 'spotify', type: 'string', isOptional: true },
    { name: 'created_at', type: 'number' }, 
    { name: 'processed_at', type: 'number', isOptional: true },
    { name: 'user_id', type: 'string', isOptional: true },
  ],
});

export const studySessionSchema = tableSchema({
  name: 'study_session',
  columns: [
    { name: 'session_id', type: 'string' },
    { name: 'created_at', type: 'number' }, 
    { name: 'completed_at', type: 'number', isOptional: true },
    { name: 'cards_studied', type: 'number' },
    { name: 'user_id', type: 'string', isOptional: true },
    { name: 'duration', type: 'number' },
  ],
});

export const tutorRequestSchema = tableSchema({
  name: 'tutor_request',
  columns: [
    { name: 'tutor_request_id', type: 'number' },
    { name: 'email', type: 'string' },
    { name: 'wechat', type: 'string', isOptional: true },
    { name: 'timezone', type: 'string' },
    { name: 'availability', type: 'string' },
    { name: 'classes_per_week', type: 'number' },
    { name: 'budget_per_class', type: 'number', isOptional: true },
    { name: 'notes', type: 'string', isOptional: true },
    { name: 'created_on', type: 'number' }, 
    { name: 'user_id', type: 'string', isOptional: true },
  ],
});

export const userSchema = tableSchema({
  name: 'user',
  columns: [
    { name: 'username', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'password', type: 'string' },
    { name: 'study_goal', type: 'number' },
    { name: 'streak', type: 'number' },
    { name: 'character_style', type: 'string' },
    { name: 'last_studied', type: 'number', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'user_id', type: 'string' },
  ],
});

export const userStatsSchema = tableSchema({
  name: 'user_stats',
  columns: [
    { name: 'user_id', type: 'string' },
    { name: 'mastery_points', type: 'number' },
    { name: 'rank', type: 'number' },
    { name: 'cards_studied', type: 'number' },
  ],
});

export const vocabSchema = tableSchema({
  name: 'vocab',
  columns: [
    { name: 'created_at', type: 'number' },
    { name: 'review_count', type: 'number' },
    { name: 'mastery', type: 'number' },
    { name: 'chinese', type: 'string' },
    { name: 'line_id', type: 'string', isOptional: true },
    { name: 'user_id', type: 'string' },
  ],
});