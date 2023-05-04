import { MODEL_NAME, MODEL_PATH } from "../utils/app/const";

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export const OpenAIModelID = {
  GPT_3_5: 'gpt-3.5-turbo',
  GPT_3_5_AZ: 'gpt-35-turbo',
  GPT_4: 'gpt-4',
  GPT_4_32K: 'gpt-4-32k',
  IMPORTED_MODEL: MODEL_PATH,
} as const;

export type OpenAIModelIDType = typeof OpenAIModelID[keyof typeof OpenAIModelID];

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.IMPORTED_MODEL;

export const OpenAIModels: Record<OpenAIModelIDType, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.IMPORTED_MODEL]: {
    id: OpenAIModelID.IMPORTED_MODEL,
    name: MODEL_NAME,
    maxLength: 12000,
    tokenLimit: 4000,
  },
};