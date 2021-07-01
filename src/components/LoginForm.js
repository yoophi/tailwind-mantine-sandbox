import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const LoginForm = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({
            field: { onChange, onBlur, value, ref },
            fieldState: { error },
          }) => (
            <TextInput
              placeholder="username"
              label="Username"
              onChange={onChange}
              onBlur={onBlur}
              elementRef={ref}
              value={value}
              error={error?.type === "required" && "Username is required"}
              required
            />
          )}
        />
      </div>

      <div className="mb-4">
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({
            field: { onChange, onBlur, value, ref },
            fieldState: { error },
          }) => (
            <PasswordInput
              placeholder="password"
              label="Password"
              description=""
              onChange={onChange}
              onBlur={onBlur}
              elementRef={ref}
              value={value}
              error={error?.type === "required" && "Password is required"}
              required
            />
          )}
        />
      </div>
      <div className="mb-4">
        <Controller
          name="rememberUsername"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              <Checkbox
                onChange={onChange}
                onBlur={onBlur}
                elementRef={ref}
                value={value}
                label="Remember Username"
              />
            </>
          )}
        />
      </div>
      <div className="mb-4">
        <Button type="submit">Login</Button>
        <Button
          variant="outline"
          onClick={() => {
            reset(
              {
                username: "",
                password: "",
                rememberUsername: false,
              },
              {
                keepErrors: false,
                keepDirty: false,
                keepTouched: false,
              }
            );
          }}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
