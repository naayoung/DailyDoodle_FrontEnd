export const baseUrl = process.env.VITE_API_URL;

// 다이어리
export { getDiaryList } from '@api/diaryAPI';
export { getDiary } from '@api/diaryAPI';
export { postDiary } from '@api/diaryAPI';
export { updateDiary } from '@api/diaryAPI';
export { deleteDiary } from '@api/diaryAPI';
