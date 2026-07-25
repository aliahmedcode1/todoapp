import { createClient } from 'https://esm.sh/@supabase/supabase-js'





const supabaseUrl = 'https://rqjdccrayndazuhxpdlo.supabase.co'
const supabaseKey = 'sb_publishable_CP764Qvs7yvgygK91AeDaA_2WRTEFmn'

export const supabase = createClient(supabaseUrl, supabaseKey)
