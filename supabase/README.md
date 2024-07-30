# Supabase

## Generate typescript types

If you modify database schema, generate new typescript types:

```bash
yarn gen:db
# or
supabase gen types typescript --local > supabase/types/types.ts
```

If you create new database table, export it as new type in `index.ts`:

```ts
import { Database } from './types/types';

export type Profile = Database['public']['Tables']['profiles']['Row'];
```