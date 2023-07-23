"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { css, cx } from "~pandacss/css";
import { buttonCss } from "~/components/ui/button";
import { hstack } from "~pandacss/patterns";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cx(buttonCss(), inset && css({ paddingLeft: "8" }), className)}
    {...props}
  >
    {children}
    <ChevronRight
      className={css({ marginLeft: "auto", height: "4", width: "4" })}
    />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cx(
      css({
        zIndex: 50,
        minWidth: "8rem",
        overflow: "hidden",
        borderRadius: "md",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.soft",
        bg: "bg.popover",
        paddingY: 1,
        color: "text.popover",
        shadow: "lg",
      }),
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ sideOffset = 4, className, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(
        css({
          zIndex: 50,
          minWidth: "8rem",
          overflow: "hidden",
          borderRadius: "md",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "border.soft",
          bg: "bg.popover",
          paddingY: 1,
          color: "text.popover",
          shadow: "md",
        }),
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cx(
      hstack(),
      css({
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
        borderRadius: "sm",
        paddingX: 2,
        paddingY: 2,
        fontSize: "sm",
        outline: "none",
        _focus: {
          bg: "primary.text",
          color: "bg.page",
        },
        "&[data-disabled]": {
          pointerEvents: "none",
          opacity: 0.5,
        },
        ...(inset && { paddingInlineStart: 8 }),
      }),
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ children, className, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cx(
      hstack(),
      css({
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
        borderRadius: "sm",
        paddingY: 2,
        paddingInlineStart: 8,
        paddingInlineEnd: 2,
        fontSize: "sm",
        outline: "none",
        _focus: {
          bg: "primary.text",
          color: "bg.page",
        },
        "&[data-disabled]": {
          pointerEvents: "none",
          opacity: 0.5,
        },
      }),
      className
    )}
    checked={checked ?? false}
    {...props}
  >
    <span
      className={css({
        position: "absolute",
        left: 2,
        display: "flex",
        height: "3.5rem",
        width: "3.5rem",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className={css({ height: "4", width: "4" })} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cx(
      hstack(),
      css({
        cursor: "pointer",
        userSelect: "none",
        borderRadius: "sm",
        padding: 2,
        fontSize: "sm",
        outline: "none",
        _focus: {
          bg: "primary.text",
          color: "bg.page",
        },
        "&[data-disabled]": {
          pointerEvents: "none",
          opacity: 0.5,
        },
      }),
      className
    )}
    {...props}
  >
    <span
      className={css({
        width: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle
          className={css({
            fill: "current",
            stroke: "current",
            width: "4px",
            height: "4px",
          })}
        />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx(
      css({
        paddingX: 2,
        paddingY: 2,
        fontSize: "sm",
        fontWeight: "semibold",
        ...(inset ? { paddingInlineStart: 8 } : {}),
      }),
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
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
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
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

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
