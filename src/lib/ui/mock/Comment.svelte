<script lang="ts">
  import { ArrowBigUp, MessageCircleReply } from 'lucide-svelte'
  import Button from '../Button.svelte'

  let {
    body,
    author,
    avatar,
    class: className = '',
  }: {
    body: string
    author: string
    avatar?: string
    class?: string
  } = $props()
</script>

<div
  class="border rounded-2xl border-zinc-200
dark:border-zinc-800 bg-white/30 dark:bg-zinc-900/30
p-2 {className}"
>
  <div class="flex flex-col gap-1">
    <div class="text-xs">{author}</div>
    <p class="text-sm">
      {body}
    </p>
    <div class="flex flex-row items-center gap-1 text-sm">
      <Button size="sm" color="ghost" rounding="pill" class="text-xs">
        <ArrowBigUp size={16} />
        323
      </Button>
      <Button size="sm" color="tertiary" rounding="pill" class="text-xs">
        <MessageCircleReply size={16} />
        Reply
      </Button>
    </div>
  </div>
</div>
