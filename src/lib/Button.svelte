<script module lang="ts">
	export type ButtonColor = keyof typeof buttonColor;
	export type ButtonAlignment = keyof typeof buttonAlignment;
	export type ButtonShadow = keyof typeof buttonShadow;

	export const buttonAlignment = {
		left: 'justify-start text-left origin-left',
		center: 'justify-center text-center origin-center',
		right: 'justify-end text-right origin-right'
	};

	export const buttonColor = {
		primary: `border border-transparent bg-slate-900 dark:bg-zinc-100 text-white dark:text-black hover:brightness-90 dark:active:brightness-75`,

		secondary: `border bg-white border-slate-200 border-b-slate-300 hover:bg-slate-100 dark:border-zinc-800 dark:border-t-zinc-700/50 dark:bg-zinc-900
		dark:hover:bg-zinc-800 dark:hover:border-zinc-700 dark:hover:border-zinc-700 dark:active:bg-zinc-900`,

		tertiary:
			'border border-transparent bg-transparent hover:bg-slate-100 dark:hover:bg-zinc-700/30 dark:text-zinc-200',

		none: ''
	};

	export const buttonShadow = {
		sm: 'shadow-xs',
		none: 'shadow-none'
	};

	export type ButtonSize = keyof typeof buttonSize;

	export const buttonSize = {
		xs: 'px-2 py-1 text-xs',
		sm: 'px-3 py-1.5 text-xs',
		md: 'px-3 py-1.5',
		lg: 'px-4 py-2',
		xl: 'px-6 py-3',
		'square-sm': 'w-6 h-6',
		'square-md': 'w-8 h-8',
		'square-lg': 'w-10 h-10',
		'square-xl': 'w-12 h-12',
		custom: ''
	};

	type ButtonRoundness = 'pill' | 'xl' | 'lg' | 'md' | 'none';

	const buttonRounding = {
		pill: 'rounded-full',
		xl: 'rounded-xl',
		lg: 'rounded-lg',
		md: 'rounded-md',
		none: ''
	};

	interface Props extends Omit<HTMLButtonAttributes | HTMLAnchorAttributes, 'prefix'> {
		loading?: boolean;
		submit?: boolean;
		color?: ButtonColor;
		size?: ButtonSize;
		rounding?: ButtonRoundness;
		alignment?: ButtonAlignment;
		shadow?: ButtonShadow;
		column?: boolean;
		loaderWidth?: number | undefined;
		href?: string | undefined;
		class?: ClassValue;
		prefix?: Snippet;
		children?: Snippet;
		suffix?: Snippet;
		onclick?: HTMLButtonAttributes['onclick'];
		transition?: boolean;
	}

	export type { Props as ButtonProps };
</script>

<script lang="ts">
	import type { ClassValue, HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	let {
		loading = false,
		submit = false,
		color = 'secondary',
		size = 'md',
		rounding = size == 'lg' ? 'xl' : 'lg',
		alignment = 'center',
		shadow = color != 'tertiary' ? 'sm' : 'none',
		column = false,
		disabled,
		loaderWidth = undefined,
		href = undefined,
		class: clazz = '',
		prefix,
		children,
		suffix,
		transition,
		...rest
	}: Props = $props();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role={href ? 'link' : 'button'}
	{href}
	{...rest}
	tabindex={disabled ? -1 : undefined}
	class={[
		loading ? buttonColor.secondary : buttonColor[color],
		buttonSize[size],
		buttonRounding[rounding],
		buttonShadow[shadow],
		transition && 'transition-all',
		'cursor-pointer text-sm font-medium duration-75 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
		disabled && 'pointer-events-none opacity-50 shadow-none',
		alignment == 'center' ? 'origin-center' : alignment == 'left' ? 'origin-left' : 'origin-right',
		clazz
	]}
	type={submit ? 'submit' : 'button'}
>
	<div
		class={[
			'flex',
			column ? 'flex-col justify-center' : 'flex-row items-center',
			'button-content h-full gap-1.5',
			buttonAlignment[alignment]
		]}
	>
		{#if prefix}
			{@render prefix?.()}
		{/if}
		{@render children?.()}
		{@render suffix?.()}
	</div>
</svelte:element>

<!--
  @component

  @slot `prefix` -- Will be replaced if `loading` is `true`.
  @slot `suffix`
-->
