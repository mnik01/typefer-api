console.clear();
import { parseSchema } from "./parseSchema.ts";
import { z } from "https://deno.land/x/zod/mod.ts";

const throwErr = (error: any) => {
  throw new Error(JSON.stringify(error.issues.map((issue: any) => issue.message)))
}

Deno.test("String array", () => {
  try {
    const response = parseSchema<string[]>('string[]')
    const validateSchema = z.array(z.string());

    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});

Deno.test("Type test", () => {
  try {
    const response = parseSchema<string[]>('string[]|10')
    const validateSchema = z.array(z.string()).length(10);

    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});

Deno.test("String array with fixed length", () => {
  try {
    const response = parseSchema<string[]>('string[]|10')
    const validateSchema = z.array(z.string()).length(10);

    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});

Deno.test("String", () => {
  try {
    const response = parseSchema<string>('string')
    const validateSchema = z.string();
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});

Deno.test("String with fixed length", () => {
  try {
    const response = parseSchema<string>('string|10')
    const validateSchema = z.string().length(10);
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Any array with fixed length", () => {
  try {
    const response = parseSchema<any[]>('any[]|10')
    const validateSchema = z.array(z.any()).length(10);
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Any array", () => {
  try {
    const response = parseSchema<any[]>('any[]')
    const validateSchema = z.array(z.any());
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Any", () => {
  try {
    const response = parseSchema<any>('any')
    const validateSchema = z.any();
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Any", () => {
  try {
    const response = parseSchema<any>('any')
    const validateSchema = z.any();
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Boolean array with fixed length", () => {
  try {
    const response = parseSchema<boolean[]>('boolean[]|10')
    const validateSchema = z.array(z.boolean()).length(10);
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Boolean array", () => {
  try {
    const response = parseSchema<boolean[]>('boolean[]')
    const validateSchema = z.array(z.boolean());
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Boolean", () => {
  try {
    const response = parseSchema<boolean>('boolean')
    const validateSchema = z.boolean();
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});

Deno.test("Number array with fixed length", () => {
  try {
    const response = parseSchema<number[]>('number[]|10')
    const validateSchema = z.array(z.number()).length(10);
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Number array", () => {
  try {
    const response = parseSchema<number[]>('number[]')
    const validateSchema = z.array(z.number());
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Number", () => {
  try {
    const response = parseSchema<number>('number')
    const validateSchema = z.number();
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});

// Custom type
Deno.test("Custom type", () => {
  try {
    const response = parseSchema<{x: number, y: number, name: string}>('{x: number, y: number, name: string}')
    const validateSchema = z.object({
      x: z.number(),
      y: z.number(),
      name: z.string(),
    });
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Custom typed array", () => {
  try {
    const response = parseSchema<{x: number, y: number, name: string}[]>('{x: number, y: number, name: string}[]')
    const validateSchema = z.array(z.object({
      x: z.number(),
      y: z.number(),
      name: z.string(),
    }));
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
Deno.test("Custom typed array with fixed length", () => {
  try {
    const response = parseSchema<{x: number, y: number, name: string}[]>('{x: number, y: number, name: string}[]|10')
    const validateSchema = z.array(z.object({
      x: z.number(),
      y: z.number(),
      name: z.string(),
    })).length(10);
    validateSchema.parse(response);
  } catch (error) {
    throwErr(error)
  }
});
