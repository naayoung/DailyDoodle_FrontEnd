import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const baseUrl = process.env.VITE_API_URL;
export const prefix = `${baseUrl}/api/diary`;

// 일기 전체 조회
export async function getDiaryList() {
  try {
    const res = await axios.get(`${prefix}/diary/totalList`);
    return res.data;
  } catch (error) {
    console.error('Error fetching diary list:', error);
    throw error;
  }
}

// 일기 조회
export async function getDiary(diaryId) {
  try {
    const res = await axios.get(`${prefix}/diary/list/${diaryId}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching diary with ID ${diaryId}:`, error);
    throw error;
  }
}

// 일기 등록
export async function postDiary(diaryDto) {
  try {
    const res = await axios.post(`${prefix}/diary/register`, diaryDto, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error('Error posting diary:', error);
    throw error;
  }
}

// 일기 수정
export async function updateDiary(diaryDto) {
  if (!diaryDto.diaryNo) {
    throw new Error('diaryNo 확인 필요');
  }
  try {
    const res = await axios.put(
      `${prefix}/diary/update/${diaryDto.diaryNo}`,
      diaryDto,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.error(`Error updating diary with ID ${diaryDto.diaryNo}:`, error);
    throw error;
  }
}

// 일기 삭제
export async function deleteDiary(diaryNo) {
  if (!diaryNo) {
    throw new Error('diaryNo 확인 필요');
  }

  try {
    const res = await axios.delete(`${prefix}/diary/delete/${diaryNo}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error(`Error deleting diary with ID ${diaryNo}:`, error);
    throw error;
  }
}
