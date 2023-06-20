CREATE OR REPLACE FUNCTION uuid_generate_v7()
  RETURNS uuid
  AS $$
DECLARE
  unix_ts_ms bytea;
  uuid_bytes bytea;
BEGIN
  -- from https://gist.github.com/kjmph/5bd772b2c2df145aa645b837da7eca74
  -- Copyright 2023 Kyle Hubert <kjmph@users.noreply.github.com> (https://github.com/kjmph)
  -- Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  -- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  -- THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  unix_ts_ms = substring(int8send(floor(extract(epoch FROM clock_timestamp()) * 1000)::bigint)
  FROM 3);
  -- use random v4 uuid as starting point (which has the same variant we need)
  uuid_bytes = uuid_send(gen_random_uuid());
  -- overlay timestamp
  uuid_bytes = overlay(uuid_bytes PLACING unix_ts_ms FROM 1 FOR 6);
  -- set version 7
  uuid_bytes = set_byte(uuid_bytes, 6,(b'0111' || get_byte(uuid_bytes, 6)::bit(4))::bit(8)::int);
  RETURN encode(uuid_bytes, 'hex')::uuid;
END
$$
LANGUAGE plpgsql
VOLATILE;

