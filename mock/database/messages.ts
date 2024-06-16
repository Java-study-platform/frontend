import { MessageDTO } from '../../generated/core-api'

export const MESSAGES: MessageDTO[] = [
  {
    id: '1a234567-89ab-cdef-0123-456789abcdef',
    content: 'Hello, world!',
    senderLogin: 'alice',
    parentMessageId: '2b345678-9abc-def0-1234-56789abcdef1',
    topicId: '3c456789-abcd-ef01-2345-6789abcdef12',
    reactions: {
      LIKE: 5,
      DISLIKE: 2
    },
    currentUserReactions: ['LIKE'],
    eventType: 'NEW',
    sentAt: '2024-06-16T12:00:00Z'
  },
  {
    id: '98765432-10fe-dcba-9876-543210abcdef',
    content: 'Hey there!',
    senderLogin: 'bob',
    parentMessageId: '87654321-fedc-ba09-8765-43210abcdefe',
    topicId: '76543210-fedc-ba98-7654-3210abcdefed',
    reactions: {
      LIKE: 10,
      DISLIKE: 1
    },
    currentUserReactions: ['DISLIKE'],
    eventType: 'UPDATE',
    sentAt: '2024-06-15T15:30:00Z'
  },
  {
    id: 'abcdef12-3456-7890-abcd-ef1234567890',
    content: 'Good morning!',
    senderLogin: 'charlie',
    reactions: {
      LIKE: 3
    },
    currentUserReactions: ['LIKE', 'DISLIKE'],
    eventType: 'NEW',
    sentAt: '2024-06-16T08:45:00Z'
  },
  {
    id: 'ab12cd34-5678-90ab-cdef-0123456789ab',
    content: 'Testing reactions.',
    senderLogin: 'dave',
    reactions: {
      LIKE: 7,
      DISLIKE: 4
    },
    currentUserReactions: [],
    eventType: 'NEW',
    sentAt: '2024-06-16T10:20:00Z'
  },
  {
    id: '12345678-90ab-cdef-0123-456789abcdef',
    content: 'Discussion topic.',
    senderLogin: 'eve',
    topicId: '23456789-abcd-ef01-2345-6789abcdef12',
    reactions: {
      LIKE: 1
    },
    currentUserReactions: ['LIKE'],
    eventType: 'NEW',
    sentAt: '2024-06-15T17:00:00Z'
  },
  {
    id: '7890abcd-ef01-2345-6789-abcdef012345',
    content: 'Updates.',
    senderLogin: 'frank',
    reactions: {
      LIKE: 2,
      DISLIKE: 1
    },
    currentUserReactions: ['LIKE'],
    eventType: 'UPDATE',
    sentAt: '2024-06-16T11:10:00Z'
  },
  {
    id: '456789ab-cdef-0123-4567-89abcdef0123',
    content: 'Important message.',
    senderLogin: 'grace',
    reactions: {
      LIKE: 5,
      DISLIKE: 0
    },
    currentUserReactions: ['LIKE', 'DISLIKE'],
    eventType: 'NEW',
    sentAt: '2024-06-16T09:00:00Z'
  },
  {
    id: 'cdef0123-4567-89ab-cdef-0123456789ab',
    content: 'React to this!',
    senderLogin: 'hannah',
    reactions: {
      LIKE: 8,
      DISLIKE: 3
    },
    currentUserReactions: ['LIKE'],
    eventType: 'NEW',
    sentAt: '2024-06-16T13:45:00Z'
  },
  {
    id: '23456789-abcd-ef01-2345-6789abcdef01',
    content: 'New update.',
    senderLogin: 'ian',
    reactions: {
      LIKE: 2,
      DISLIKE: 1
    },
    currentUserReactions: ['DISLIKE'],
    eventType: 'UPDATE',
    sentAt: '2024-06-16T14:20:00Z'
  },
  {
    id: '89abcdef-0123-4567-89ab-cdef01234567',
    content: 'Welcome message.',
    senderLogin: 'jane',
    reactions: {
      LIKE: 4,
      DISLIKE: 0
    },
    currentUserReactions: ['LIKE'],
    eventType: 'NEW',
    sentAt: '2024-06-15T14:00:00Z'
  }
]
