// documentation: https://ui.shadcn.com/docs/components/dropdown-menu
"use client";

// we're wrapping the default radix dropdown menu components for our own
// instrumented version
// eslint-disable-next-line no-restricted-imports
import {
  Portal,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  ItemIndicator,
  Label,
  Separator,
  SubTrigger,
  SubContent,
} from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { css, cx } from "~pandacss/css";
import { buttonCss } from "~/components/ui/button";
import {
  baseMenuCss,
  baseMenuIndicatorWrapperCss,
  baseMenuItemCss,
} from "~/components/ui/dropdown-menu.css";
import { hstack } from "~pandacss/patterns";
import type {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
} from "react";
import { forwardRef } from "react";

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ sideOffset = 4, className, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(baseMenuCss, className)}
      {...props}
    />
  </Portal>
));
DropdownMenuContent.displayName = Content.displayName;

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={cx(
      baseMenuItemCss,
      inset && css({ paddingInlineStart: 8 }),
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = Item.displayName;

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  ComponentPropsWithoutRef<typeof CheckboxItem>
>(({ children, className, checked, ...props }, ref) => (
  <CheckboxItem
    ref={ref}
    className={cx(baseMenuItemCss, className)}
    checked={checked ?? false}
    {...props}
  >
    <span className={baseMenuIndicatorWrapperCss}>
      <ItemIndicator>
        <Check className={css({ height: "1em", width: "1em" })} />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadioItem ref={ref} className={cx(baseMenuItemCss, className)} {...props}>
    <span className={baseMenuIndicatorWrapperCss}>
      <ItemIndicator>
        <Circle className={css({ fill: "current", width: "6px" })} />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));
DropdownMenuRadioItem.displayName = RadioItem.displayName;

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cx(
      css({
        padding: 2,
        fontSize: "sm",
        fontWeight: "semibold",
      }),
      inset && css({ paddingInlineStart: 8 }),
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = Label.displayName;

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cx(
      css({
        marginX: -1,
        marginY: 1,
        height: "1px",
        bg: "muted",
      }),
      className
    )}
    {...props}
  />
));
DropdownMenuSeparator.displayName = Separator.displayName;

export const DropdownMenuShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cx(
        css({
          marginLeft: "auto",
          fontSize: "xs",
          letterSpacing: "widest",
          opacity: 0.6,
        }),
        className
      )}
      {...props}
    />
  );
};

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// Submenu components

export const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cx(
      buttonCss(),
      hstack(),
      inset && css({ paddingLeft: "8" }),
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight
      className={css({ marginLeft: "auto", height: "1em", width: "1em" })}
    />
  </SubTrigger>
));
DropdownMenuSubTrigger.displayName = SubTrigger.displayName;

export const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  ComponentPropsWithoutRef<typeof SubContent>
>(({ className, ...props }, ref) => (
  <SubContent ref={ref} className={cx(baseMenuCss, className)} {...props} />
));
DropdownMenuSubContent.displayName = SubContent.displayName;

// eslint-disable-next-line no-restricted-imports
export {
  Root as DropdownMenu,
  Trigger as DropdownMenuTrigger,
  Group as DropdownMenuGroup,
  RadioGroup as DropdownMenuRadioGroup,
  Sub as DropdownMenuSub,
  Portal as DropdownMenuPortal,
} from "@radix-ui/react-dropdown-menu";
