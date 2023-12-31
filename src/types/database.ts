import {Tables} from "@/types/supabase";

type PostEntity = Tables<'posts'>
type ProfileEntity = Tables<'profiles'>

export type Post = PostEntity & {
  profile: ProfileEntity
};

export type {Database} from '@/types/supabase'