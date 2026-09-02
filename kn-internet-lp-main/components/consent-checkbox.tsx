"use client";

import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type ConsentCheckboxProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  error?: boolean;
};

/**
 * Checkbox de consentimento LGPD, obrigatório em qualquer formulário
 * que colete dados pessoais (waitlist, contratação, etc.).
 * Mantenha sempre desmarcado por padrão — nunca pré-marcado.
 */
export function ConsentCheckbox({
  checked,
  onCheckedChange,
  id = "consentimento-privacidade",
  error = false,
}: ConsentCheckboxProps) {
  return (
    <div className="flex items-start gap-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(value) => onCheckedChange(value === true)}
        className={error ? "border-red-500" : undefined}
      />
      <label htmlFor={id} className="text-sm leading-snug text-muted-foreground">
        Li e concordo com a{" "}
        <Link
          href="/politica-de-privacidade"
          target="_blank"
          className="underline text-kn-orange hover:text-kn-blue"
        >
          Política de Privacidade
        </Link>{" "}
        e autorizo o uso dos meus dados para os fins nela descritos.
      </label>
    </div>
  );
}
