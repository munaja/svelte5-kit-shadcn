<script lang="ts">
  // ---------- Imports ----------
  // libs
  import * as Card from 'lib/comps/shadcn-ui/card';

  // apps
  import type { Item } from './item';

  // ---------- Props (Legacy: Exports) ----------
  let { data }: { data: Item } = $props();
</script>

<Card.Root>
	<Card.Content>
		<div class="title">
			{data.title}
		</div>
		<div class="number">
			{data.count}
		</div>
	</Card.Content>
</Card.Root>
